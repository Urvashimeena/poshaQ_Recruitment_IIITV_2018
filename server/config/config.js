var env = process.env.NODE_ENV || 'development' || 'production';

if (env === 'development')
{
  console.log(`env*****${env}`);
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TMDB';
} 
else if (env === 'test')
{
	 console.log(`env*****${env}`);
  	 process.env.PORT = 3000;
    //  process.env.MONGODB_URI = 'mongodb://localhost:27017/TMDBTest';    for test files
}
else if(env === 'production')
{
	  console.log(`env*****${env}`);
//	  process.env.MONGODB_URI == '';    url of poshaqdomain

}


