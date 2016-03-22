module.exports = {
	filesToMove: [
		'app/**/*.html',
		'app/**/*.md'
	],
	vendorCSS: [
		'bower_components/font-awesome/css/font-awesome.css'
	],
	scripts: [
		'app/assets/scripts/*.js'
	],
	vendorJS: [
		'bower_components/jquery/dist/jquery.js'
	],
	images: [
		'app/assets/images/**/*'
	],
	fonts: [
		'app/assets/fonts/*',
		'bower_components/font-awesome/fonts/*'
	],
	sass: {
		toCompile: [
			'app/assets/sass/*.scss'
		],
		toWatch: [
			'app/assets/sass/**/*.scss'
		]
	}
};
