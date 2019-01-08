var express = require('express')
var app = express()
var request = require('request')
app.set('view engine', 'ejs')
app.get('/selectmovie',function(req,res){
   	request('https://api.themoviedb.org/3/movie/top_rated?api_key=3e3554e20f277ff6c6782e8cef861bcf&language=en-US&page=1', function(error, response, body){
		res.render('movietop100',{res : JSON.parse(body)})
	})
   })
	app.get('/selectedmovie/:name',function(req,res){
		 var id1=req.params.name;
		 id1=parseInt(id1)
		 console.log(id1)
		request('https://api.themoviedb.org/3/movie/'+id1+'?api_key=3e3554e20f277ff6c6782e8cef861bcf&language=en-US',function(error,response,body){
				res.render('moviedetails',{res:JSON.parse(body)})
		})
	})


app.listen(3000, function(){
	console.log('we started the server')
})