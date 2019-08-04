using Microsoft.EntityFrameworkCore.Migrations;

namespace AtTheTop.API.Migrations
{
    public partial class UserPageUrl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PageUrl",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PageUrl",
                table: "Users");
        }
    }
}
