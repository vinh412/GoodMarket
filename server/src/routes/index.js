import authRoute from './auth';
import shopRoute from './shop';
import publicProductRoute from './publicproduct';
import publicShopRoute from './publicshop';

const initRoutes = (app) => {
    app.use('/api/v1/auth', authRoute);
    app.use('/api/v1/shop', shopRoute);
    app.use('/api/v1/product', publicProductRoute);
    app.use('/api/v1/public', publicShopRoute);
    
    return app.use('/', (req, res) => {
        res.send('server on');
    });
}
export default initRoutes;