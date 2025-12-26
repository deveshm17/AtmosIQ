import csv

DATA_FILE = "../data/sample_aqi_data.csv"

def load_aqi_data():
    """Reads AQI values from a CSV file and returns them as a list."""
    aqi_values = []

    with open(DATA_FILE, "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            aqi_values.append(int(row["aqi"]))

    return aqi_values


def calculate_average_aqi(aqi_list):
    """Calculates average AQI from a list of values."""
    if not aqi_list:
        return 0

    total = sum(aqi_list)
    return total // len(aqi_list)
