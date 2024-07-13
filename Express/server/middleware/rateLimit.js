const rateLimitStore = {};
const customRateLimiter = (limit = 10, windowMs = 10000) => {
    return (req, res, next) => {
        const key = req.ip; // Change this to identify users if needed (e.g., req.user.id)
        const currentTime = Date.now();

        if (!rateLimitStore[key]) {
            rateLimitStore[key] = {
                requests: [],
                limit,
            };
        }

        // Remove expired requests from the store
        rateLimitStore[key].requests = rateLimitStore[key].requests.filter(
            (timestamp) => currentTime - timestamp <= windowMs
        );

        // Check if request count exceeds limit within the window
        if (rateLimitStore[key].requests.length >= limit) {
            return res.status(429).json({ message: 'Too Many Requests' });
        }

        // Add current request timestamp to the store
        rateLimitStore[key].requests.push(currentTime);

        // Call next middleware
        next();
    };
};


export { customRateLimiter }