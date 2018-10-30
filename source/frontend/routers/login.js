exports.Login = (fpm) => {
    const router = fpm.createRouter();
    
    router.post('/login', async ctx => {
        await ctx.redirect('./cms/dashboard')
    })

    return router;
}