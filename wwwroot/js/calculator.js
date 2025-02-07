$(document).ready(function () {
    $("#calculate").click(function () {
        var hours = parseFloat($("#hours").val());
        var rate = parseFloat($("#rate").text().trim());

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            $("#error-message").show(); // Show error message
            $("#total").text("Error");
            return;
        } else {
            $("#error-message").hide(); // Hide error message if valid
        }

        // Calculate total cost
        var total = hours * rate;
        $("#total").text(total.toFixed(2));
    });

    // Allow empty input but prevent negative/zero values when losing focus
    $("#hours").on("blur", function () {
        var value = parseFloat($(this).val());

        if (isNaN(value) || value <= 0) {
            $(this).val(""); // Allow empty input, will be validated on click
        }
    });
});



