$(document).ready(function(){
  var pretragaInput=$("#pretraga-input");
  var rezultatiPretrage=$("#rezultati-pretrage");

  pretragaInput.on("input", function(event){
    var pojamPretrage = event.target.value.trim();
    var entity="song"; //potpuno nepotrebno
    var pretragaurl="https://itunes.apple.com/search?term="+pojamPretrage+"&entity="+entity;
    $.ajax({
      url:pretragaurl,
      method:"GET",
      dataType:"json",
      success: function(data){
        rezultatiPretrage.empty();
        if (data.resultCount==0)
        {
          rezultatiPretrage.text("Nije pronađeno podudaranje");
        }
        else
        {
          $.each(data.results, function(index, result){
            var imePjesme=result.trackName;
            var imeIzvodaca=result.artistName;

            var pjesmaElement=$("<li></li>").text(imePjesme+" - "+imeIzvodaca);
            rezultatiPretrage.append(pjesmaElement);
          });
        }
      },
      error: function(error){
        console.log(error);
        rezultatiPretrage.text("Problemi s dohvatom podataka. Molimo pokušajte kasnije.");
      }
    });

  });
});