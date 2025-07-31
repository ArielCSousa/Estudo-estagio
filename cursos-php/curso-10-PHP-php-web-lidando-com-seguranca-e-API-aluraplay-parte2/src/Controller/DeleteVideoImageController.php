<?php

declare(strict_types=1);

namespace Alura\Mvc\Controller;

use Alura\Mvc\Repository\VideoRepository;

class DeleteVideoImageController implements Controller
{
    public function __construct(private VideoRepository $videoRepository)
    {

    }

    public function processaRequisicao(): void
    {
        $id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);

        if($id === false || $id === null){
            header('Location: /?sucesso=0');
            return;
        }

        //vai utilizar a função que torna o caminho da imagem (filePath) como NULL
        $success = $this->videoRepository->removeImageFromVideo($id);

        if($success){
            header('Location: /?sucesso=1');
        } else {
            header('Location: /?sucesso=0');
        }
    }
}
