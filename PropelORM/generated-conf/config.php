<?php

$serviceContainer = \Propel\Runtime\Propel::getServiceContainer();
$serviceContainer->checkVersion('2.0.0-dev');
$serviceContainer->setAdapterClass('propelbook', 'mysql');
$manager = new \Propel\Runtime\Connection\ConnectionManagerSingle();
$manager->setConfiguration(array(
    'classname' => 'Propel\\Runtime\\Connection\\ConnectionWrapper',
    'dsn' => 'mysql:host=localhost;dbname=propelbook',
    'user' => 'makhtar',
    'password' => 'MAKlib',
));
$manager->setName('propelbook');
$serviceContainer->setConnectionManager('propelbook', $manager);
$serviceContainer->setDefaultDatasource('propelbook');
