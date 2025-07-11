<?php

return [
    "target_php_version" => '8.4',
    'directory_list' => [
        'src',
        'vendor/symfony/dom-crawler',
        'vendor/guzzlehttp/guzzle',
        'vendor/psr/http-message',
    ],
    "exclude_analysis_directory_list" => [
        'vendor'
    ],
    //   'file_list' => array_map('strval', iterator_to_array(
    //     new RecursiveIteratorIterator(
    //         new RecursiveDirectoryIterator('src')
    //     )
    // )),
    'plugins' => [
        'AlwaysReturnPlugin',
        'DollarDollarPlugin',
        'DuplicateArrayKeyPlugin',
        'DuplicateExpressionPlugin',
        'PregRegexCheckerPlugin',
        'PrintfCheckerPlugin',
        'SleepCheckerPlugin',
        'UnreachableCodePlugin',
        'UseReturnValuePlugin',
        'EmptyStatementListPlugin',
        'LoopVariableReusePlugin',
    ],
     'autoload_files' => [
        'vendor/autoload.php'
    ],
        "enable_include_paths" => true,

];