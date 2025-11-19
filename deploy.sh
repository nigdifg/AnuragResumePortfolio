#!/bin/bash

# Quick Deployment Script for Anurag Portfolio
# This script helps you deploy your portfolio quickly

set -e

echo "🚀 Anurag Portfolio - Quick Deployment Script"
echo "=============================================="
echo ""

# Check if we're in the correct directory
if [ ! -d "anurag-portfolio" ]; then
    echo "❌ Error: Please run this script from the repository root directory"
    exit 1
fi

cd anurag-portfolio

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo ""
echo "Please select a deployment option:"
echo "1) Vercel (Recommended - Fastest & Free)"
echo "2) Netlify (Great features & Free)"
echo "3) GitHub Pages (Simple & Free)"
echo "4) Build only (creates dist folder)"
echo "5) Preview build locally"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo ""
        echo "📦 Deploying to Vercel..."
        echo ""
        
        # Check if Vercel CLI is installed
        if ! command -v vercel &> /dev/null; then
            echo "Installing Vercel CLI..."
            npm install -g vercel
        fi
        
        echo "🚀 Starting Vercel deployment..."
        vercel
        ;;
    
    2)
        echo ""
        echo "📦 Deploying to Netlify..."
        echo ""
        
        # Check if Netlify CLI is installed
        if ! command -v netlify &> /dev/null; then
            echo "Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        
        echo "Building project..."
        npm run build
        
        echo "🚀 Starting Netlify deployment..."
        netlify deploy --prod
        ;;
    
    3)
        echo ""
        echo "📦 Deploying to GitHub Pages..."
        echo ""
        
        # Check if gh-pages is installed
        if ! npm list gh-pages &> /dev/null; then
            echo "Installing gh-pages..."
            npm install --save-dev gh-pages
        fi
        
        echo "⚠️  Make sure you have updated package.json with:"
        echo "  - homepage: https://yourusername.github.io/AnuragResumePortfolio"
        echo "  - deploy script: gh-pages -d dist"
        echo ""
        read -p "Have you configured package.json? (y/n): " configured
        
        if [ "$configured" = "y" ] || [ "$configured" = "Y" ]; then
            echo "🚀 Building and deploying to GitHub Pages..."
            npm run deploy
            echo ""
            echo "✅ Deployed! Enable GitHub Pages in your repository settings:"
            echo "   Settings → Pages → Source: gh-pages branch"
        else
            echo "❌ Please configure package.json first. See DEPLOYMENT.md for instructions."
        fi
        ;;
    
    4)
        echo ""
        echo "🏗️  Building project..."
        npm run build
        echo ""
        echo "✅ Build complete! Your files are in the 'dist' folder."
        echo "   You can now upload these files to any static hosting service."
        ;;
    
    5)
        echo ""
        echo "🏗️  Building project..."
        npm run build
        echo ""
        echo "👀 Starting preview server..."
        npm run preview
        ;;
    
    *)
        echo "❌ Invalid choice. Please run the script again and select 1-5."
        exit 1
        ;;
esac

echo ""
echo "✨ Done! Visit DEPLOYMENT.md for more deployment options and troubleshooting."
