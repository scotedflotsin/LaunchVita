import apiResponse from "../utils/ApiResponse.js";
import aiGeminiClient from "../services/aiGeminiClient.js";

/**
 * Controller to generate AI-based response
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const generate = async (req, res) => {
  try {
    const { description } = req.query;

    // Validate input
    if (!description || description.trim().length === 0) {
      return res
        .status(400)
        .json(apiResponse(false, 400, true, "Description is required.", []));
    }

    // Get AI response
    const response = await aiGeminiClient(description);

    // Check for valid AI response
    const generatedText = response?.response?.text?.();
    if (!generatedText) {
      return res
        .status(503)
        .json(apiResponse(false, 503, true, "AI is busy, please try again later.", []));
    }

    // Return success response
    return res
      .status(201)
      .json(apiResponse(true, 201, false, "Success", [{ response: generatedText }]));

  } catch (error) {
    // Log the error for debugging
    console.error("Error in generate controller:", error);

    // Return internal server error response
    return res
      .status(500)
      .json(apiResponse(false, 500, true, "Internal Server Error", []));
  }
};

export default generate;
