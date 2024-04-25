{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyNfCmGmYDxoECvWwaW8Sdgx",
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
        "<a href=\"https://colab.research.google.com/github/elespius/mmi/blob/main/config.js\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "// config.js\n",
        "\n",
        "const mysql = require('mysql');\n",
        "\n",
        "// Create a connection pool\n",
        "const pool = mysql.createPool({\n",
        "    host: 'localhost',\n",
        "    user: 'your_username',\n",
        "    password: 'your_password',\n",
        "    database: 'your_database',\n",
        "    connectionLimit: 10 // Adjust as needed\n",
        "});\n",
        "\n",
        "module.exports = pool;\n"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/",
          "height": 108
        },
        "id": "XWj_pkbuTMOc",
        "outputId": "a64c44d8-c92b-404e-d534-d4ca5768621b"
      },
      "execution_count": 2,
      "outputs": [
        {
          "output_type": "error",
          "ename": "SyntaxError",
          "evalue": "invalid syntax (<ipython-input-2-e86fae1d2266>, line 1)",
          "traceback": [
            "\u001b[0;36m  File \u001b[0;32m\"<ipython-input-2-e86fae1d2266>\"\u001b[0;36m, line \u001b[0;32m1\u001b[0m\n\u001b[0;31m    // config.js\u001b[0m\n\u001b[0m    ^\u001b[0m\n\u001b[0;31mSyntaxError\u001b[0m\u001b[0;31m:\u001b[0m invalid syntax\n"
          ]
        }
      ]
    }
  ]
}