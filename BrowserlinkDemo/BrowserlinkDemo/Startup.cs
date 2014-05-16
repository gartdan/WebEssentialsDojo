using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BrowserlinkDemo.Startup))]
namespace BrowserlinkDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
