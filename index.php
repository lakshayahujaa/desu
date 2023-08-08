<!DOCTYPE html>
<html>
<head>
	<title>DESU * Login</title>
	<link rel="stylesheet" href="stylei.css">
	<link rel="website icon" href="./assets/favicon.png">
</head>
<body>
     <form action="login.php" method="post">
		<div class="logo">
			<img src="desu.png" class = "center">
		</div> 
    	<h2>Login</h2>
		
     	<?php if (isset($_GET['error'])) { ?>
     		<p class="error"><?php echo $_GET['error']; ?></p>
     	<?php } ?>
     	<label>User Name</label>
     	<input type="text" name="uname"><br>

     	<label>Password</label>
     	<input type="password" name="password"><br>

     	<button type="submit">Login</button>
     </form>
</body>
</html>