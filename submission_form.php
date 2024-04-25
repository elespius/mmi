{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "toc_visible": true,
      "authorship_tag": "ABX9TyNdvtkpvcEp50FAc5SbDisO",
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
        "<a href=\"https://colab.research.google.com/github/elespius/mmi/blob/main/submission_form.php\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "<?php\n",
        "// Handle form submission\n",
        "if ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {\n",
        "    $title = $_POST[\"title\"];\n",
        "    $category = $_POST[\"category\"];\n",
        "    $image = $_POST[\"image\"];\n",
        "\n",
        "    // Insert data into the database (replace with your database connection code)\n",
        "    $servername = \"localhost\";\n",
        "    $username = \"username\";\n",
        "    $password = \"password\";\n",
        "    $dbname = \"dbname\";\n",
        "\n",
        "    // Create connection\n",
        "    $conn = new mysqli($servername, $username, $password, $dbname);\n",
        "\n",
        "    // Check connection\n",
        "    if ($conn->connect_error) {\n",
        "        die(\"Connection failed: \" . $conn->connect_error);\n",
        "    }\n",
        "\n",
        "    // Insert data into the table\n",
        "    $sql = \"INSERT INTO portfolio (title, category, image) VALUES ('$title', '$category', '$image')\";\n",
        "\n",
        "    if ($conn->query($sql) === TRUE) {\n",
        "        echo \"New record created successfully\";\n",
        "    } else {\n",
        "        echo \"Error: \" . $sql . \"<br>\" . $conn->error;\n",
        "    }\n",
        "\n",
        "    $conn->close();\n",
        "}\n",
        "?>\n"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/",
          "height": 108
        },
        "id": "XWj_pkbuTMOc",
        "outputId": "bc1c8dbf-483c-4b81-9521-72cffaba9206"
      },
      "execution_count": 5,
      "outputs": [
        {
          "output_type": "error",
          "ename": "SyntaxError",
          "evalue": "invalid syntax (<ipython-input-5-b19060685d12>, line 1)",
          "traceback": [
            "\u001b[0;36m  File \u001b[0;32m\"<ipython-input-5-b19060685d12>\"\u001b[0;36m, line \u001b[0;32m1\u001b[0m\n\u001b[0;31m    <?php\u001b[0m\n\u001b[0m    ^\u001b[0m\n\u001b[0;31mSyntaxError\u001b[0m\u001b[0;31m:\u001b[0m invalid syntax\n"
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