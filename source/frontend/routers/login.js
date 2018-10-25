exports.Login = (fpm) => {
    const router = fpm.createRouter();
    
    router.post('/login', async ctx => {
        await ctx.redirect('./dashboard')
    })

    router.get('/login', async ctx => {
        await ctx.render('pages/login.html');
    })

    return router;
}