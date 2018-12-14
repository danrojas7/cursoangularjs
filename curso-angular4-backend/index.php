<?php
require("vendor/autoload.php");

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new \Slim\App;
$db = new mysqli('localhost', 'root', '', 'curso_angular4');

// Configuración de cabeceras
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    die();
}


$app->get('/prueba', function (Request $request, Response $response) use ($app, $db) {
    echo "Hola mundo desde Slim PHP";
    // var_dump($db);
});
$app->get('/probando', function (Request $request, Response $response) use ($app, $db) {
    echo "Otro texto cualquiera";
});

// Listar todos los productos
$app->get('/productos', function (Request $request, Response $response) use ($app, $db) {
    $sql = 'SELECT * FROM PRODUCTOS ORDER BY ID DESC;';
    $query = $db->query($sql);

    // var_dump($query->fetch_assoc());
    // var_dump($query->fetch_all());
    $productos = array();
    while ($producto = $query->fetch_assoc()) {
        $productos[] = $producto;
    }

    $result = array(
        'status' => 'sucess',
        'code' => 200,
        'data' => $productos
    );

    echo json_encode($result);
});

// Devolver un solo producto
$app->get('/productos/{id}', function (Request $request, Response $response, $args) use ($app, $db) {
    $sql = 'SELECT * FROM PRODUCTOS WHERE ID = ' . $args['id'];
    $query = $db->query($sql);

    if ($query->num_rows == 1) {
        $producto = $query->fetch_assoc();
        $result = array(
            'status' => 'sucess',
            'code' => 200,
            'data' => $producto
        );
    } else {
        $result = array(
            'status' => 'unsucess',
            'code' => 404,
            'message' => 'Producto no encontrado.'
        );
    }
    echo json_encode($result);
});

// Eliminar un producto
$app->get('/delete-producto/{id}', function (Request $request, Response $response, $args) use ($app, $db) {
    $sql = 'DELETE FROM PRODUCTOS WHERE ID = ' . $args['id'];
    $query = $db->query($sql);

    if ($query) {
        $result = array(
            'status' => 'sucess',
            'code' => 200,
            'message' => 'El producto se ha eliminado correctamente.'
        );
    } else {
        $result = array(
            'status' => 'unsucess',
            'code' => 404,
            'message' => 'El NO producto se ha eliminado.'
        );
    }
    echo json_encode($result);
});

// Actualizar un producto
$app->post('/update-producto/{id}', function (Request $request, Response $response, $args) use ($app, $db) {
    $json = $request->getParsedBody()['json'];
    $data = json_decode($json, true);

    $sql = "UPDATE PRODUCTOS SET ";
    $sql .= "nombre = '{$data['nombre']}', ";
    $sql .= "descripcion = '{$data['descripcion']}', ";
    $sql .= "precio = '{$data['precio']}' ";
    if (isset($data['imagen'])) {
        $sql .= ", imagen = '{$data['imagen']}' ";
    }
    $sql .= "WHERE ID = {$args['id']};";
    $query = $db->query($sql);
    var_dump($sql);

    if ($query) {
        $result = array(
            'status' => 'sucess',
            'code' => 200,
            'message' => 'El producto se ha actualizado correctamente.'
        );
    } else {
        $result = array(
            'status' => 'unsucess',
            'code' => 404,
            'message' => 'El NO producto se ha actualizado.'
        );
    }
    echo json_encode($result);
});


// Subir una imagen a un producto
$app->post('/upload-file', function (Request $request, Response $response) {
    $result = array(
        'status' => 'unsucess',
        'code' => 404,
        'message' => 'El archivo no ha podido subirse.'
    );
    
    // var_dump($_FILES['uploads']);
    if (isset($_FILES['uploads'])) {
        $piramideUploader = new PiramideUploader();
        $upload = $piramideUploader->upload('image', 'uploads', 'uploads', array('image/jpeg', 'image/png', 'image/gif'));
        $file = $piramideUploader->getInfoFile();
        $file_name = $file['complete_name'];

        if (isset($upload) && $upload['uploaded'] == false) {
            $result = array(
                'status' => 'unsucess',
                'code' => 404,
                'message' => 'El archivo no ha podido subirse. Detalle del error: ' . $upload['error'] . '.',
                'filename' => $file_name
            );
        } else {
            $result = array(
                'status' => 'sucess',
                'code' => 200,
                'message' => 'El archivo se ha subido correctamente',
                'filename' => $file_name
            );
        }
    }
    echo json_encode($result);
});


// Guardar productos
$app->post('/productos', function (Request $request, Response $response) use ($app, $db) {
    $json = $request->getParsedBody()['json'];
    $data = json_decode($json, true);

    if (!isset($data['nombre'])) {
        $data['nombre'] = null;
    }

    if (!isset($data['descripcion'])) {
        $data['descripcion'] = null;
    }

    if (!isset($data['precio'])) {
        $data['precio'] = null;
    }

    if (!isset($data['imagen'])) {
        $data['imagen'] = null;
    }

    $sql = "INSERT INTO PRODUCTOS VALUES(" .
        "NULL," .
        "'{$data['nombre']}'," .
        "'{$data['descripcion']}'," .
        "'{$data['precio']}'," .
        "'{$data['imagen']}'" .
        ");";

    $insert = $db->query($sql);

    if ($insert) {
        $result = array(
            'status' => 'sucess',
            'code' => 200,
            'message' => 'Producto creado correctamente'
        );
    } else {
        $result = array(
            'status' => 'sucess',
            'code' => 404,
            'message' => 'El producto NO se ha creado'
        );
    }
    // var_dump($query);
    echo json_encode($result);
});

$app->run();
?>
 