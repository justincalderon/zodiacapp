var zodiac = [
  {
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.jpg",
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.jpg"
	},
	{
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.jpg"
	},
	{
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.jpg"
	},
	{
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.jpg"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.jpg"
	},
	{
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.jpg"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.jpg"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.jpg"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.jpg"
	},
	{
		sign: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.jpg"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.jpg"
	}
]

// function to determine user's horoscope, function fires on user clicking button line 29
function horoscope() {
  // store the tag with id="sign" in var userdata
  var userdata = document.getElementById("userdata")
  // confirm the data exists and what value the user submits
  console.log(userdata);
  console.log("users value is: " + userdata.value);

  // loop through zodiac array one at a time
  for (i = 0; i < zodiac.length; i++) {
    // if the v
    if (userdata.value === zodiac[i].sign) {
      // get element from id="userSign" and change the text to the user input
      document.getElementById("yourSign").textContent = userdata.value
      // get element with id="icon" and change source attribute to the current zodiac image path
      document.getElementById("icon").src = zodiac[i].image
      // get element with id="yourHoroscope" and change the content to this concatenated string
      document.getElementById("yourHoroscope").textContent = "Your best attributes are - " + zodiac[i].fortune

      // stop function because we found a match and added the data to the screen.
      return
    }
  }
}
