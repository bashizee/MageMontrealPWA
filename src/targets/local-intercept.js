module.exports = (targets) => {
    targets.of("@magento/venia-ui").routes.tap((routes) => {
        routes.push({
            name: "see-all-products",
            pattern: "/see-all-products",
            path: require.resolve("../components/SeeAllProducts/SeeAllProducts.js"),
        });
        return routes;
    });
};
