module.exports= {
    PORT: process.env.PORT || 3000,
	
    mongoUri: process.env.MONGODB_URI || "mongodb://localhost:27017/vite-esm",

    SECRETKEY: process.env.JWT_SECRET || "vite-esm-secret-key",

}
	
		
	



