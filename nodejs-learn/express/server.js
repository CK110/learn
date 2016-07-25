var express = require('express');
var app = express();
//post请求
var bodyParser = require('body-parser');

//上传文件
var fs= require('fs');
var multer = require('multer');

app.use(express.static('public'));

app.get('/index.html',function (req,res) {
    res.sendFile(__dirname+"/"+"index.html")
});

/**
 * get
 */
app.get('/process_get',function (req,res) {

    console.log("req:"+req.originalUrl);

    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };

    console.log("get"+response);
    res.end(JSON.stringify(response));
})

/**
 *post
 */
var urlencodedParser  = bodyParser.urlencoded({ extended:false})
app.post('/process_post',urlencodedParser,function (req,res) {
    //输出json 格式
    response = {
        first_name: req.body.first_name,
        last_name:req.body.last_name
    };

    console.log("post:"+response);

    res.end(JSON.stringify(response));
});

/**
 * upload
 */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use( multer({ dest:'/tmp/' }).array('image') );

app.post('/file_upload',function (req,res) {
    console.log(req.files[0]);

    var des_file = __dirname + "/" +req.files[0].originalname;
    fs.readFile(req.files[0].path,function (err,data) {
        fs.writeFile(des_file,data,function (err) {
            if(err){
                console.log(err);
            }else {
                response = {
                    message:'上传成功',
                    filename:req.files[0].originalname
                }
            }
        })

        console.log(response);

        res.end( JSON.stringify( response ));

    })
})

var server = app.listen(8081,function () {
    var  host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})