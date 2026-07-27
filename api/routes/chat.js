const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {

  const message = req.body.message.toLowerCase();

  let reply = "";
  let suggestion = "";
  let feature = "";



  // SAD / DEPRESSION
  if (
    message.includes("sad") ||
    message.includes("depressed") ||
    message.includes("lonely") ||
    message.includes("hopeless") ||
    message.includes("cry")
  ) {

    reply = "I'm really sorry you're feeling this way. You're not alone. I'm here to listen.";

    suggestion = "Try taking slow deep breaths for a minute. If you'd like, you can also talk with our volunteer support.";

    feature = "volunteer";

  }



  // STRESS / OVERWORK
  else if (
    message.includes("stress") ||
    message.includes("stressed") ||
    message.includes("tired") ||
    message.includes("overwhelmed") ||
    message.includes("pressure")
  ) {

    reply = "It sounds like you're feeling overwhelmed right now.";

    suggestion = "Try stepping away for a few minutes, drink some water, and breathe slowly.";

    feature = "resources";

  }



  // ANXIETY
  else if (
    message.includes("anxious") ||
    message.includes("anxiety") ||
    message.includes("nervous") ||
    message.includes("panic")
  ) {

    reply = "Feeling anxious can be really difficult. You're safe here.";

    suggestion = "Try the 4-7-8 breathing technique: inhale for 4 seconds, hold for 7, exhale for 8.";

    feature = "resources";

  }



  // ANGER
  else if (
    message.includes("angry") ||
    message.includes("frustrated") ||
    message.includes("annoyed")
  ) {

    reply = "It sounds like something has really upset you.";

    suggestion = "Before reacting, try taking a few deep breaths or step away for a moment.";

    feature = "wellness";

  }



  // HAPPY
  else if (
    message.includes("happy") ||
    message.includes("good") ||
    message.includes("great") ||
    message.includes("excited")
  ) {

    reply = "That's wonderful to hear 😊 I'm really glad you're feeling good.";

    suggestion = "Keep doing activities that bring you joy and peace.";

    feature = "resources";

  }



  // NEED PROFESSIONAL HELP
  else if (
    message.includes("therapy") ||
    message.includes("doctor") ||
    message.includes("counseling")
  ) {

    reply = "Talking with a professional can be a very helpful step.";

    suggestion = "You can book a confidential appointment with a doctor through ZenZone.";

    feature = "doctor";

  }



  // DEFAULT RESPONSE
  else {

    reply = "I'm here to listen. Tell me more about how you're feeling.";

    suggestion = "Sometimes writing your thoughts or taking a slow breath can help.";

    feature = "chat";

  }



  res.json({
    reply,
    suggestion,
    feature,
    safety: "ZenZone AI provides emotional support and not professional medical advice."
  });

});

module.exports = router;
