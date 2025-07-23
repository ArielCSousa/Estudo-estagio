<?php

namespace Alura\Pdo\Infrastructure\Repository;

use Alura\Pdo\Domain\Model\Phone;
use Alura\Pdo\Domain\Model\Student;
use Alura\Pdo\Domain\Repository\StudentRepository;
use Alura\Pdo\Infrastructure\Persistence\ConnectionCreator;
use DateTimeImmutable;
use PDO;

class PdoStudentRepository implements StudentRepository
{
    private PDO $connection;

    public function __construct(PDO $connection) {
        $this->connection = $connection;
    }

    private function hydrateStudentList(\PDOStatement $stmt): array 
    {
        $studentDataList = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $studentList = [];

        foreach ($studentDataList as $studentData) {
            $studentList = new Student(
                $studentData['id'],
                $studentData['name'],
                new DateTimeImmutable($studentData['birth_date'])
            );
        }

        return $studentList;
    }

    // private function fillPhonesOf(Student $student): void
    // {
    //     $srqlQuery = 'SELECT id, area_code, number FROM phones WHERE student_id = ?;';
    //     $stmt = $this->connection->prepare($srqlQuery);
    //     $stmt->bindValue(1, $student->id(), PDO::PARAM_INT);
    //     $stmt->execute();

    //     $phoneDataList = $stmt->fetchAll();

    //     foreach ($phoneDataList as $phoneData) {
    //         $phone = new Phone (
    //             $phoneData['id'],
    //             $phoneData['area_code'],
    //             $phoneData['number']  
    //         );

    //         $student->addPhone($phone);
    //     }

    // }

     public function allStudents(): array
     {
        $sqlQuery = 'SELECT * FROM students;';
        $stmt = $this->connection->query($sqlQuery);

        return $this->hydrateStudentList($stmt);
     }

    public function studentsBirthAt(\DateTimeInterface $birthDate): array
    {

        $sqlQuery = 'SELECT * FROM students WHERE birth_date = ?;';
        $stmt = $this->connection->prepare($sqlQuery);
        $stmt->bindValue(1,$birthDate->format('Y-m-d'));
        $stmt->execute();

        return $this->hydrateStudentList($stmt);
    }

    public function save(Student $student): bool
    {
        if ($student->id() === null) {
            return $this->insert($student);
        }

        return $this->update($student);
    }

    public function insert(Student $student): bool
    {
        $insertQuery = 'INSERT INTO students (name, birth_date) VALUES (:name, :birth_date);';
        $stmt = $this->connection->prepare($insertQuery);
        if($stmt === false){
            throw new \RuntimeException($this->connection->errorInfo()[2]); //[2] é o indice da mensagem de erro no array de informações da exceção
        }

        $success = $stmt->execute([
            ':name' => $student->name(),
            ':birth_date' => $student->birthDate()->format(format:'Y-m-d'),
        ]);

        if($success){
            $student->defineId($this->connection->lastInsertId());
        }

        return $success;
    }

     public function update(Student $student): bool
    {
        $updateQuery = 'UPDATE students SET name = :name, birth_date = :birth_date WHERE id = :id;';
        $stmt = $this->connection->prepare($updateQuery);
        $stmt->bindValue(':name', $student->name());
        $stmt->bindValue(':birth_date', $student->birthDate()->format('Y-m-d'));
        $stmt->bindValue(':id', $student->id(), PDO::PARAM_INT);

        return $stmt->execute();
    }


    public function remove(Student $student): bool
    {
        $stmt = $this->connection->prepare('DELETE FROM students WHERE id = ?;');
        $stmt->bindValue(1, $student->id(), PDO::PARAM_INT);

        return $stmt->execute();
    }

    public function studentsWithPhones(): array
    {
        $sqlQuery = "SELECT students.id, 
                            students.name, 
                            students.birth_date,
                            phones.id AS phone_id,
                            phones.area_code,
                            phones.number
                    FROM students
                    JOIN phones ON students.id = phones.student_id;";

        $stmt = $this->connection->query($sqlQuery);
        $result = $stmt->fetchAll();
        $studentList = [];

        foreach($result as $row){
            if(!array_key_exists($row['id'], $studentList)){
                $studentList[$row['id']] = new Student(
                    $row['id'],
                    $row['name'],
                    new DateTimeImmutable($row['birth_date']),
                );
            }
            
            $phone = new Phone($row['phone_id'], $row['area_code'], $row['number']);
            $studentList[$row['id']]->addPhone($phone);
        }

        return $studentList;
    }

}
