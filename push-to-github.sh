#!/bin/bash

# Simple script to push changes to GitHub

echo "📦 Adding all changes..."
git add .

echo "💬 Enter commit message:"
read commit_message

echo "📝 Committing changes..."
git commit -m "$commit_message"

echo "🚀 Pushing to GitHub..."
git push

echo "✅ Done! Changes pushed to GitHub."