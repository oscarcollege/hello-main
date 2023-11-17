<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            background-color: green;
            color: white;
            padding: 4px;
            cursor: pointer;
        }
        div {
            padding: 10px;
        }
        </style>
</head>
<body>
    <h1>Task List</h1>
    <?php
    if (isset($_GET['name'])) {
        $newTasks = $_GET['name'];
        $index = 3;

        foreach ($newTasks as $newTask) {
            $index = $index + 1;
            echo "<div>";
            echo "<span class='text'>$newTask </span>";
            echo "<span class='box'>complete</span>";
            echo "</div>";
        }
    }
    ?>

    <form method="GET">
        <label for="name">task name: </label>
        <input type="text" name="name[]">

        <?php
        foreach ($_GET as $name => $value) {
            foreach ($value as $task) {
                echo "<input type='hidden' name='name[]' value='$task'>";
            }
        }
        ?>

        <button type="submit">submit</button>
    </form>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>

