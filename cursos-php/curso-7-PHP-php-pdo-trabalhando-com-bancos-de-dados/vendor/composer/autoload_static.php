<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit37a1b1a9b80248c98fba1fde823410c0
{
    public static $prefixLengthsPsr4 = array (
        'A' =>
        array (
            'Alura\\Pdo\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Alura\\Pdo\\' =>
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit37a1b1a9b80248c98fba1fde823410c0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit37a1b1a9b80248c98fba1fde823410c0::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit37a1b1a9b80248c98fba1fde823410c0::$classMap;

        }, null, ClassLoader::class);
    }
}
