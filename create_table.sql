{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyPpZ2glG20tcSnKIXnO3uFA",
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
        "<a href=\"https://colab.research.google.com/github/elespius/mmi/blob/main/create_table.sql\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "CREATE TABLE IF NOT EXISTS portfolio (\n",
        "    id INT AUTO_INCREMENT PRIMARY KEY,\n",
        "    title VARCHAR(255) NOT NULL,\n",
        "    category VARCHAR(255) NOT NULL,\n",
        "    image VARCHAR(255) NOT NULL\n",
        ");\n"
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