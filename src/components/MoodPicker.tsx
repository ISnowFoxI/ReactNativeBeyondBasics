import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MoodOptionTypes } from '../Types';

const moodOptions: MoodOptionTypes[] = [
  { emoji: '👨‍🎓', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionTypes>();
  return (
    <View style={styles.moodOptions}>
      {moodOptions.map(option => (
        <View>
          <Pressable
            onPress={() => setSelectedMood(option)}
            style={[
              styles.moodItem,
              selectedMood?.emoji === option.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text key={option.emoji}>{option.emoji}</Text>
          </Pressable>
          <Text style={styles.emojiDescriptionText}>
            {option.emoji === selectedMood?.emoji
              ? option.description
              : undefined}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  moodItem: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedMoodItem: {
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#454c73',
  },
  emojiDescriptionText: {
    color: '#454c73',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
});
