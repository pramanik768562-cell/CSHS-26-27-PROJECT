import java.util.Scanner;

public class App
{
    public static void main(String[] args)
    {
        Scanner input = new Scanner(System.in);

        boolean addAnother = true;
        double totalEmissions = 0;

        System.out.println("================================");
        System.out.println(" WEEKLY FOOD WASTE LOGGER");
        System.out.println("================================");

        System.out.println("Enter the food you wasted over the past 7 days.");
        System.out.println("All food quantities should be in kilograms (kg).");
        System.out.println();

        // Collect food waste information
        while (addAnother)
        {
            System.out.print("Food: ");
            String foodName = input.nextLine();

            System.out.print("Amount wasted this week (kg): ");
            double quantityKg = input.nextDouble();

            System.out.print("Emission factor (kg CO2e per kg of food): ");
            double factorValue = input.nextDouble();

            input.nextLine();

            // Create FoodEmissionFactor object
            FoodEmissionFactor factor =
                new FoodEmissionFactor(foodName, factorValue);

            // Create WasteLog object
            WasteLog log =
                new WasteLog(quantityKg, factor);

            // Calculate emissions
            double emissions = log.getEmissionsKgCo2e();

            totalEmissions += emissions;

            System.out.println();
            System.out.println("Food successfully logged!");
            System.out.println("Food: " + foodName);
            System.out.println("Weekly waste: " + quantityKg + " kg");
            System.out.println("Emissions: " + emissions + " kg CO2e");
            System.out.println();

            System.out.print("Log another food item? (y/n): ");
            String answer = input.nextLine();

            if (answer.equalsIgnoreCase("n"))
            {
                addAnother = false;
            }

            System.out.println();
        }

        // Display weekly emissions summary
        System.out.println("================================");
        System.out.println(" WEEKLY EMISSIONS SUMMARY");
        System.out.println("================================");

        System.out.println("Total weekly emissions: " +
            totalEmissions + " kg CO2e");

        // Personalized feedback
        System.out.println();
        System.out.println("PERSONALIZED FEEDBACK");
        System.out.println("--------------------------------");

        if (totalEmissions < 5)
        {
            System.out.println("Excellent work!");
            System.out.println("Your weekly food waste emissions are relatively low.");
            System.out.println("Continue planning your meals and avoiding unnecessary waste.");
        }
        else if (totalEmissions < 15)
        {
            System.out.println("Good effort!");
            System.out.println("There is some room to reduce your food waste emissions.");
            System.out.println("Try buying only what you need and storing leftovers properly.");
        }
        else if (totalEmissions < 30)
        {
            System.out.println("Room for improvement!");
            System.out.println("Your weekly food waste emissions could be lower.");
            System.out.println("Try planning meals, controlling portions, and using leftovers.");
        }
        else
        {
            System.out.println("Your weekly food waste emissions are relatively high.");
            System.out.println("Consider making changes to your food habits.");
            System.out.println("Plan meals, avoid overbuying, and reduce unnecessary food waste.");
        }

        System.out.println("--------------------------------");
        System.out.println("Thank you for using the Weekly Food Waste Logger!");

        input.close();
    }
}


// Stores information about a food's emission factor
class FoodEmissionFactor
{
    private String foodName;
    private double kgCo2ePerKg;

    public FoodEmissionFactor(String foodName, double factor)
    {
        this.foodName = foodName;
        kgCo2ePerKg = factor;
    }

    public String getFoodName()
    {
        return foodName;
    }

    public double getKgCo2ePerKg()
    {
        return kgCo2ePerKg;
    }
}


// Stores information about a food waste entry
class WasteLog
{
    private double quantityKg;
    private FoodEmissionFactor emissionFactor;

    public WasteLog(double quantityKg,
                    FoodEmissionFactor emissionFactor)
    {
        this.quantityKg = quantityKg;
        this.emissionFactor = emissionFactor;
    }

    public double getQuantityKg()
    {
        return quantityKg;
    }

    public FoodEmissionFactor getEmissionFactor()
    {
        return emissionFactor;
    }

    // Calculates emissions for the wasted food
    public double getEmissionsKgCo2e()
    {
        return quantityKg *
            emissionFactor.getKgCo2ePerKg();
    }
}
