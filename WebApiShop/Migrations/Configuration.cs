namespace WebApiShop.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApiShop.Models.ProductContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(WebApiShop.Models.ProductContext context)
        {
            context.Products.AddOrUpdate(
            p => p.Name,
                     new Product { Name = "Product 1", Price = 14, Quantity = 88 },
                     new Product { Name = "Product 2", Price = 22, Quantity = 3 },
                     new Product { Name = "Product 3", Price = 38, Quantity = 6 },
                     new Product { Name = "Product 4574", Price = 49, Quantity = 7 });

        }
    }
}
