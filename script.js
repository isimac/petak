$(document).ready(function(){
    $("#character-form").submit(function(event){
        event.preventDefault();
        var imeLika=$("#character-name").val();
        var url="https://swapi.dev/api/people/?search="+imeLika;
        $.ajax({
            url:url,
            dataType:"json",
            type: "GET",
            success: function(data)
            {
                if (data.results.length>0)
                {
                    var lik=data.results[0];
                    //Prikažite ime, godinu rođenja, spol, boju kose i očiju.
                    var likInfo="<h1>"+lik.name+"</h1>";
                    likInfo+="<p>"+lik.birth_year+"</p>";
                    likInfo+="<p>"+lik.gender+"</p>";
                    likInfo+="<p>"+lik.hair_color+"</p>";
                    likInfo+="<p>"+lik.eye_color+"</p>";
                    $("#character-info").html("<p>Podatci su pronađeni</p>");
                }
                else
                {
                    $("#character-info").html("<p>Podatci o liku nisu pronađeni</p>");
                }

            },
            error:function(){
                $("#character-info").html("<p>Podatci nisu dohvaćeni. Molimo pokušajte kasnije.</p>");
            }
        });
    });
});