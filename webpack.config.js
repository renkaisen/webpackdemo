const path = require('path');//导入路径包

module.exports = {

	//首先入口文件
	entry:'./index.js',


	//输出文件build 下的bundle.js
	output:{
		path:path.resolve(__dirname,'build'),
		filename:'bundle.js'
	},

	//使用loader模块
	module:{
		loaders:[
			{test:/\.css$/,loader:'style!css'}
		],
		loaders:[
			{test:/\.scss$/,loader:'style!css!scss'}
		]
	},

};