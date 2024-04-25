import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
  render() {
    // Define the emotions and their sentiment scores
    const emotions = ['sadness', 'joy', 'fear', 'disgust', 'anger'];
    const sentimentScores = [0.250524, 0.722962, 0.009157, 0.003132, 0.016098];

    const emotionScores = emotions.map((emotion, index) => {
      return { emotion, score: sentimentScores[index] };
    });

    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Emotion</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {
              emotionScores.map((emotionScore, index) => (
                <tr key={index}>
                  <td>{emotionScore.emotion}</td>
                  <td>{emotionScore.score}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmotionTable;
