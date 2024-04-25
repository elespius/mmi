{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "toc_visible": true,
      "authorship_tag": "ABX9TyN+PKvW7eWaKgb8tZfDa11K",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/elespius/mmi/blob/main/admin.js\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "// Sample portfolio data (replace with actual data from the backend)\n",
        "let portfolioData = [];\n",
        "\n",
        "// Function to display portfolio items\n",
        "function displayPortfolioItems() {\n",
        "    const portfolioList = document.getElementById('portfolio-list');\n",
        "    portfolioList.innerHTML = '';\n",
        "    portfolioData.forEach(item => {\n",
        "        const portfolioItem = document.createElement('div');\n",
        "        portfolioItem.classList.add('portfolio-item');\n",
        "        portfolioItem.innerHTML = `\n",
        "            <h3>${item.title}</h3>\n",
        "            <p>${item.category}</p>\n",
        "            <img src=\"${item.image}\" alt=\"${item.title}\">\n",
        "        `;\n",
        "        portfolioList.appendChild(portfolioItem);\n",
        "    });\n",
        "}\n",
        "\n",
        "// Function to handle form submission\n",
        "function handleFormSubmit(event) {\n",
        "    event.preventDefault();\n",
        "    const formData = new FormData(event.target);\n",
        "    const title = formData.get('title');\n",
        "    const category = formData.get('category');\n",
        "    const image = formData.get('image');\n",
        "    // Add code to send form data to the backend\n",
        "    // For now, just log the form data\n",
        "    console.log('Title:', title);\n",
        "    console.log('Category:', category);\n",
        "    console.log('Image:', image);\n",
        "    // Update portfolioData array with the new item\n",
        "    portfolioData.push({ title, category, image });\n",
        "    // After adding new item, display updated portfolio\n",
        "    displayPortfolioItems();\n",
        "}\n",
        "\n",
        "// Add event listener for form submission\n",
        "const portfolioForm = document.getElementById('portfolio-form');\n",
        "portfolioForm.addEventListener('submit', handleFormSubmit);\n",
        "\n",
        "// Display initial portfolio items\n",
        "displayPortfolioItems();\n"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/",
          "height": 108
        },
        "id": "XWj_pkbuTMOc",
        "outputId": "ac14258b-ba6d-471b-aaa4-be072e9daa40"
      },
      "execution_count": 4,
      "outputs": [
        {
          "output_type": "error",
          "ename": "SyntaxError",
          "evalue": "invalid syntax (<ipython-input-4-f8deb317890d>, line 1)",
          "traceback": [
            "\u001b[0;36m  File \u001b[0;32m\"<ipython-input-4-f8deb317890d>\"\u001b[0;36m, line \u001b[0;32m1\u001b[0m\n\u001b[0;31m    <?php\u001b[0m\n\u001b[0m    ^\u001b[0m\n\u001b[0;31mSyntaxError\u001b[0m\u001b[0;31m:\u001b[0m invalid syntax\n"
          ]
        }
      ]
    },
    {
      "cell_type": "code",
      "source": [],
      "metadata": {
        "id": "UQPonwdBgYrK"
      },
      "execution_count": null,
      "outputs": []
    }
  ]
}