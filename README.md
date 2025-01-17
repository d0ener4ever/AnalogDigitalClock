Dynamic Clock with Rotating Numbers

This project is a fully dynamic and visually engaging analog clock, where each clock hand is composed of numbers that represent the current time. The numbers are arranged vertically along the clock hands and dynamically update every second to reflect the current hour, minute, and second.
Features

    Analog Clock Layout:
        The clock consists of three hands: hour, minute, and second.
        A central dot marks the pivot point of the clock hands.

    Dynamic Numbers on Hands:
        Each hand is "built" out of numbers:
            The hour hand displays three numbers.
            The minute hand displays four numbers.
            The second hand displays five numbers.
        The numbers update dynamically every second and remain upright as the hands rotate.

    Accurate Time Representation:
        The angles of the hands are calculated in real time based on the current hour, minute, and second.

    Responsive and Centered Design:
        The clock is centrally aligned on the webpage, making it responsive to different screen sizes.

    Custom Styling:
        Unique colors and styles for each hand:
            Green for the hour numbers.
            Blue for the minute numbers.
            Red for the second numbers.
        Subtle shadows and rounded corners give the clock a polished look.

Technologies Used

    HTML:
        Provides the structure for the clock and its hands.
    CSS:
        Handles the styling, positioning, and alignment of the clock and its components.
    JavaScript:
        Dynamically calculates angles for the clock hands.
        Updates numbers and rotates hands in real time.
        Keeps the numbers on the hands upright regardless of rotation.

How It Works

    The current time is fetched using JavaScript's Date object.
    The angles for the hour, minute, and second hands are calculated based on the current time.
    Numbers are dynamically generated for each hand and placed along the hand's axis.
    Each hand rotates smoothly to its correct position while the numbers remain upright using a combination of CSS transform and rotate.

How to Run

    Clone this repository:

git clone https://github.com/yourusername/dynamic-clock

Navigate to the project folder:

    cd dynamic-clock

    Open the index.html file in any modern web browser to see the clock in action.

Preview

Here's what the clock looks like in action:
