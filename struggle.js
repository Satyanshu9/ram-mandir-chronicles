document.addEventListener('DOMContentLoaded', function () {
  const struggleImage = document.getElementById('struggleImage');
  const struggleText = document.getElementById('struggleText');
  const nextButton = document.getElementById('nextButton');

  const struggles = [
    {
      text: "राम मंदिर के निर्माण के इतिहास में आपका स्वागत है! यह स्थल भगवान राम के प्रेरणास्थान के रूप में महत्वपूर्ण है।",
      image: "ram5a.jpg"
    },
    {
      text: "1528 – Mosque construction: बाबर, पहले मुघल शासक, राम के जन्मस्थान पर स्थित एक मंदिर के स्थान पर बाबरी मस्जिद की नींव रखी थी।",
      image: "ram2.jpg"
    },
    {
      text: "1853 – First recorded instance of conflict: एक हिन्दू सम्प्रदाय दावा करता है कि बाबर के शासनकाल में एक मंदिर को मस्जिद के लिए रास्ता बनाने के लिए नष्ट किया गया था।",
      image: "ram7.jpeg"
    },
    {
      text: "1859 - The British erect a fence: ब्रिटिश प्रशासन ने स्थल को हिन्दु और मुस्लिमों के लिए दो अलग खंडों में विभाजित किया। मुस्लिमों को अंदर, जबकि हिन्दुओं को बाहरी आंगन में पूजा की अनुमति थी।",
      image: "ram4.jpeg"
    },
    {
      text: "December 23, 1949 – Mosque becomes a ‘disputed property’: सरकार ने मस्जिद को विवादित संपत्ति घोषित किया और इसके दरवाजे को ताला लगा दिया। इसके बाद मस्जिद में कोई मुस्लिम प्रार्थनाएँ नहीं हुईं।",
      image: "ram3.jpeg"
    },
    {
      text: "1950-61 – Civil suits filed <br> 1984 – Hindu temple committee formed <br> 1990 – BJP’s Ram temple campaign <br> December 6,1992 – Hindu mob tears down the mosque",
      image: "ram7.jpeg" // pictures req
    },
    {
      text: "December 16, 1992 – Liberhan Commission : मस्जिद के ढांचे के गिराए जाने के दस दिनों बाद, केंद्र सरकार ने इस घटना की जाँच के लिए लिबरहान आयोग का गठन किया।",
      image: "ram2.jpg" // pictures req
    },
    {
      text: "June 2009 Liberhan Commission report : रिपोर्ट ने बीजेपी और उसके विचारशील मार्गदर्शक RSS के कई नेताओं को मस्जिद के ढांचे के गिराए जाने के लिए जिम्मेदार ठहराया।",
      image: "ram3.jpeg" // pictures req
    },
    {
      text: "September 2010 – Site to be ‘shared’ : इलाहाबाद उच्च न्यायालय के तीन न्यायाधीश निर्णय लेते हैं कि हिन्दू और मुस्लिम दोनों को विवादित स्थल का साझा करना चाहिए।" ,
      image: "ram4.jpeg" // pictures req
    },
    {
      text: "May 2011 – Ruling suspended : सुप्रीम कोर्ट ने हाईकोर्ट के फैसले को निलंबित कर दिया है, हिन्दू और मुस्लिम समूहों की अपील के बाद।",
      image: "ram6.jpeg" // pictures req
    },
    {
      text: "December 5, 2017 – Supreme Court hearing <br> January 25, 2019 – Five-judge bench to hear case <br> March 8, 2019 – Mediation panel set up",
      image: "ram7.jpeg" // pictures req
    },
    {
      text: "August 2, 2019 – Mediation failed <br> August 6, 2019 – Day-to-day hearing <br> October 16, 2019 – Hearing concluded, order reserved",
      image: "ram8.jpeg" // pictures req
    },
    {
      text: "November 9, 2019 – Supreme Court ruling: सुप्रीम कोर्ट ने फैसला किया है कि भूमि को एक विशेषज्ञ मंदिर निर्माण के लिए सौंपा जाना चाहिए, यह कुछ शर्तों के अधीन है।",
      image: "ram9.jpeg" // pictures req
    },
    {
      text: "February 5, 2020 – Trust set up: श्रीराम जन्मभूमि तीर्थ क्षेत्र ट्रस्ट की स्थापना की गई है, जो मंदिर के निर्माण और प्रबंधन का कार्य संबोधित करेगा।",
      image: "ram10.jpeg" // pictures req
    },

    {
      text: "August 5, 2020 – PM lays foundation stone : मोदी जी ने मंदिर के निर्माण के लिए शिलान्यास किया और उसकी प्लाक अनवील की।",
      image: "foundation.jpg" // pictures req
    },
    {
      text: "January 22, 2024 – Temple consecration : कुछ पंगतों के निर्माण का कार्य अभी बाकी होने के बावजूद, राम मंदिर का उद्घाटन किया गया है।",
      image: "ramodi.jpeg" // pictures req
    },
    {
      text: "एक बड़े समारोह में प्रमुख व्यक्तियों, हिन्दू धार्मिक नेताओं, और मोदी जी का समावेश होता है जो अयोध्या में आयोजित किया जाता है।",
      image: "modi.jpg" // pictures req
    },
    {
      text: "इस समारोह में मूर्तियों का प्रदर्शन और भव्यता होती है, जिसमें राम की मूर्ति को इमारत के अंदर के गर्भगृह में रखा जाता है।",
      image: "ram_lalla.jpg" // pictures req
    },
    {
      text: "धन्यवाद! <br> आप राम मंदिर का निर्माण कर सकते हैं नीचे दिए गए राम मंदिर की छवि पर क्लिक करके।",
      image: "mandir3.jpg" // pictures req
    },
    // {
    //   text: "",
    //   image: ".jpeg" // pictures req
    // },
   
  ];

  let currentStruggleIndex = 0;

  nextButton.addEventListener('click', function () {
    if (currentStruggleIndex < struggles.length - 1) {
      currentStruggleIndex++;
      showStruggle(currentStruggleIndex);
    }
  });

  function showStruggle(index) {
    struggleText.innerHTML = `<h1>${struggles[index].text}</h1>`;
    struggleImage.style.opacity = 0; 
    setTimeout(() => {
      struggleImage.src = struggles[index].image;
      struggleImage.style.opacity = 1; 
    }, 500); 
  }

  
  showStruggle(currentStruggleIndex);




const mandirButton = document.getElementById('mandirButton');

mandirButton.addEventListener('click', function () {
  // Redirect
  window.location.href = 'mandir.html';
});




});
