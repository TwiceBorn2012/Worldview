using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace FunctionsAPI
{
    public static class Function1
    {
      [FunctionName("AddBlog")]
      public static async Task<IActionResult> Run(
      [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
      [CosmosDB(
              databaseName: "Blogs",
              collectionName: "Items",
              ConnectionStringSetting = "CosmosDatabaseString")]IAsyncCollector<dynamic> documentsOut,
      ILogger log)
      {
        log.LogInformation("C# HTTP trigger function processed a request.");

        // string name = req.Query["name"];

        string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
        dynamic blog = JsonConvert.DeserializeObject(requestBody);


        // Add a JSON document to the output container.
        await documentsOut.AddAsync(new
        {
          // create a random ID
          image = blog.image,
          heading = blog.heading,
          blogDate = blog.blogDate,
          subHeading = blog.subHeading,
          blogDetail = blog.blogDetail
        });


          /*
         string responseMessage = string.IsNullOrEmpty(body)
             ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
             : $"Hello, {name}. This HTTP triggered function executed successfully.";
         */

        string responseMessage = "You have successfully added a blog to the database";
        return new OkObjectResult(responseMessage);
      }
    }

  public class Blog
  {
    public int Id { get; set; }
    public string image { get; set; }
    public string heading { get; set; }
    public string subHeading { get; set; }
    public string blogDate { get; set; }
    public string blogDetail { get; set; }
  }
}
