#!/bin/bash

for file in *-exercises.md; do
  # Extract the numeric prefix (e.g., 06, 07, etc.)
  prefix=$(echo "$file" | cut -d'-' -f1)
  # Create new file name
  new="${prefix}-xExercises.md"
  # Rename the file
  mv "$file" "$new"
done

