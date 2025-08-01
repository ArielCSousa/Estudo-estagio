<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitb7271f199b5cf88b4e14be3e5b14148e
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitb7271f199b5cf88b4e14be3e5b14148e', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitb7271f199b5cf88b4e14be3e5b14148e', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitb7271f199b5cf88b4e14be3e5b14148e::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
