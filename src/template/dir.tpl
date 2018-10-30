<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{title}}</title>
    <style>
        body {
            margin: 30px
        }
        a {
            padding: 5px;
            display:block;
            font-size: 16px;
        }
    </style>
</head>
<body>
    {{#each files}}
        <a href="{{../dir}}/{{this}}">{{this}}</a>
    {{/each}}
</body>
</html>