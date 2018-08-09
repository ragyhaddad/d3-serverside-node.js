### D3 serverside setup on node express.js
Serverside rendering backbone code for D3.js
#### Example usage 
After you start your app you can call requests from your javascript client-side
And append your server rendered visualization to your DOM

```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
    
</body>
</html>
<script>    

    $.get('http://localhost:3000/', function(data){
        $('body').html(data);
    })
</script>



