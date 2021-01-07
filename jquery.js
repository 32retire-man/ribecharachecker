jQuery(function($) {
  const $title = $('.header-title');
  const $questionForm = $('.question-form');
  
  let i = 0;
  const ans = [];
  let goma = 0;
  let yoshiharu = 0;
  let ikuma = 0;

  // 出題分の出力
  function questionLoad() {
    $('#question-number').text(`第${questions[i].number}問！`);
    $('#question').text(`${questions[i].text}`);
    $('.x').html(`<label><input type="radio" name="answer" value="${questions[i].value1}">${questions[i].answer1}</label>`);
    $('.y').html(`<label><input type="radio" name="answer" value="${questions[i].value2}">${questions[i].answer2}</label>`);
    $('.z').html(`<label><input type="radio" name="answer" value="${questions[i].value3}">${questions[i].answer3}</label>`);
  };
  
  //結果発表
  function result() {
 
    for (let p = 0; p < questions.length; p++) {
      if (ans[p] === 'A1') {
        goma += 20;
      } else if (ans[p] === 'A2') {
        ikuma += 10;
        yoshiharu += 10;
      } else if (ans[p] === 'A3') {
        ikuma += 20;
      } else if (ans[p] === 'B1') {
        yoshiharu += 10;
      } else if (ans[p] === 'B2') {
        ikuma += 30;
      } else if (ans[p] === 'B3') {
        goma += 5;
      } else if (ans[p] === 'C1') {
        goma += 18;
      } else if (ans[p] === 'C2') {
        ikuma += 5;
        yoshiharu += 15;
      } else if (ans[p] === 'C3') {
        goma += 100;
        ikuma += 100;
        yoshiharu += 100;
      } 
      console.log(goma);
      console.log(yoshiharu);
      console.log(ikuma);
    }

    if (goma > yoshiharu && goma > ikuma) {
      setTimeout(function() {
        $('.result-wrapper').fadeIn();
        $('.result').html('<div class="result-image go"><h1>あなたと似たタイプは</h1><img src="gomatyan.png"><h3>ゴマちゃんさん</h3><br><p class="result-message1">＜所属＞<br>せどり部管理人<br><br>＜主な出現場所＞<br>せどり部<br><br>＜32リタイア男の偏見によるプロフィール＞<br>ZOOMで会うとゴマフアザラシに変身する</p></div>');
      }, 800);
    } else if (yoshiharu > goma && yoshiharu > ikuma) {
        setTimeout(function() {
          $('.result-wrapper').fadeIn();
          $('.result').html('<div class="result-image yo"><h1>あなたと似たタイプは</h1><img src="yoshiharusan.png"><h3>よしはるさん</h3><br><p class="result-message2">＜所属＞<br>プログラミング部サポーター（管理人？）<br><br>＜主な出現場所＞<br>プログラミング部 技術向上チャット<br><br>＜32リタイア男の偏見によるプロフィール＞<br>プログラミングをゴリゴリ使って、<br>せどりツールを作成しているゴリラの神</p></div>');
        }, 800);
    } else if (ikuma > goma && ikuma > yoshiharu) {
      setTimeout(function() {
        $('.result-wrapper').fadeIn();
        $('.result').html('<div class="result-image ik"><h1>あなたと似たタイプは</h1><img src="ikumasan.png"><h3>いくまさん</h3><br><p class="result-message3">＜所属＞<br>プログラミング部管理人<br><br>＜主な出現場所＞<br>プログラミング部 技術向上チャット、案件獲得・転職チャット<br><br>＜32リタイア男の偏見によるプロフィール＞<br>新プラ開発を担当した熊の皮を被ったプログラマー。<br>自習室できゅうりをよく齧ってる</p></div>');
      }, 800);
    } else {
        setTimeout(function() {
          $('.result-wrapper').fadeIn();
          $('.result').html(
            '<h1 style="font-size: 36px; padding-top: 40px;">プログラムミス</h1><p style="padding-bottom: 40px;">作者がプログラムミスした時に表示されるページです。報告頂けると助かります</p>'
          );
        }, 800);
    }
  };

  // 見た目にこだわったあたり
  setTimeout(function() {
    $title.fadeIn();
  }, 200);


  setTimeout(function() {
    $('#telling').html(
      `貴方がリベシティのどの有名人と似たタイプなのか<br>
      これから出す${questions.length}つの質問への回答で診断します。<br>
      ※診断結果はジョークです。肖像元の要求により変更・閉鎖するかも。`
    );
    $('.orientation').fadeIn();
  }, 1200);

  $('#first-button').click(function() {
    $('#loading').fadeIn(0);

    setTimeout(function() {
      $('.orientation').fadeOut();
    }, 400);

    setTimeout(function() {
      questionLoad();
      $questionForm.fadeIn(600);
    }, 1200);
  });

  // 回答ボタンの動作
  $('#answer-button').click(function(e) {
    e.preventDefault();
    
    ans[i] = $('input:radio[name="answer"]:checked').val();
    
    if (ans[i] === undefined) {
      $('#error').css('display', 'block');
    } else {
      $('#error').css('display', 'none');
      i++;
      $questionForm.fadeOut();
      if (i === questions.length) {
        result();
      } else {
        setTimeout(function() {
          questionLoad();
          $questionForm.fadeIn();
        }, 400);
      }
    }
  });

});