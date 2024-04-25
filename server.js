{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyM16JPUF4lKmgX1vbJLV0Bg",
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
        "<a href=\"https://colab.research.google.com/github/elespius/mmi/blob/main/server.js\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "// server.js\n",
        "\n",
        "const express = require('express');\n",
        "const bodyParser = require('body-parser');\n",
        "const pool = require('./config');\n",
        "\n",
        "const app = express();\n",
        "const PORT = process.env.PORT || 3000;\n",
        "\n",
        "// Middleware\n",
        "app.use(bodyParser.urlencoded({ extended: false }));\n",
        "app.use(bodyParser.json());\n",
        "\n",
        "// Route to handle form submission and database interaction\n",
        "app.post('/portfolio', (req, res) => {\n",
        "    const { title, category, image } = req.body;\n",
        "    // Insert data into the database\n",
        "    pool.query('INSERT INTO portfolio (title, category, image) VALUES (?, ?, ?)', [title, category, image], (error, results) => {\n",
        "        if (error) {\n",
        "            console.error('Error inserting data:', error);\n",
        "            res.status(500).json({ error: 'Internal server error' });\n",
        "        } else {\n",
        "            console.log('Data inserted successfully');\n",
        "            res.status(201).json({ message: 'Data inserted successfully' });\n",
        "        }\n",
        "    });\n",
        "});\n",
        "\n",
        "// Serve static files\n",
        "app.use(express.static('public'));\n",
        "\n",
        "// Start the server\n",
        "app.listen(PORT, () => {\n",
        "    console.log(`Server is running on http://localhost:${PORT}`);\n",
        "});\n"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/",
          "height": 108
        },
        "id": "XWj_pkbuTMOc",
        "outputId": "d0563899-c51d-43f5-ea98-d2f307fe5d0c"
      },
      "execution_count": 3,
      "outputs": [
        {
          "output_type": "error",
          "ename": "SyntaxError",
          "evalue": "invalid syntax (<ipython-input-3-b11fc45005e8>, line 1)",
          "traceback": [
            "\u001b[0;36m  File \u001b[0;32m\"<ipython-input-3-b11fc45005e8>\"\u001b[0;36m, line \u001b[0;32m1\u001b[0m\n\u001b[0;31m    // server.js\u001b[0m\n\u001b[0m    ^\u001b[0m\n\u001b[0;31mSyntaxError\u001b[0m\u001b[0;31m:\u001b[0m invalid syntax\n"
          ]
        }
      ]
    }
  ]
}