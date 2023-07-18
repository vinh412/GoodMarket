import authRoute from './auth';
import shopRoute from './shop';

const initRoutes = (app) => {
    app.use('/api/v1/auth', authRoute);
    app.use('/api/v1/shop', shopRoute);
    
    return app.use('/', (req, res) => {
        res.send('server on');
    });
}
export default initRoutes;