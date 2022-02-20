/**
 * Portf0lio 2.0
 */
export const portfolioCodeString = "/**\n" +
    " * On load, get repository data from repository service\n" +
    " *\n" +
    " */\n" +
    "useEffect(() => {\n" +
    "    if (repositories.length === 0) {\n" +
    "        repositoryService.getRepos(\"jacobtleblanc\").then(\n" +
    "            (data) => {\n" +
    "                repositoryData = data;\n" +
    "                createRepositories(data);\n" +
    "            }\n" +
    "        )\n" +
    "    }\n" +
    "})";

export const portfolioDescription = "Portfolio built with React, and hosted using AWS Amplify";
export const portfolioTechnologies = "React, Route53, Amplify and Terraform";
export const portfolioLink = "https://github.com/JacobTLeBlanc/Portfolio_2.0";

/**
 * Git Rest API
 */
export const gitRestApiCodeString = "def get_repos(user):\n" +
    "    \"\"\"\n" +
    "    Gets repos for the given user\n" +
    "\n" +
    "    Params\n" +
    "    -------\n" +
    "    user\n" +
    "        user to get repos from\n" +
    "\n" +
    "    Returns\n" +
    "    -------\n" +
    "    json\n" +
    "        a json object representing a list of (public) repositories\n" +
    "    \"\"\"\n" +
    "\n" +
    "    logger.info(\"Getting repos from \" + user)\n" +
    "\n" +
    "    response = request.urlopen(\n" +
    "            request.Request(\n" +
    "                url='https://api.github.com/users/' + user + '/repos',\n" +
    "                headers={\n" +
    "                    'Accept': 'application/json',\n" +
    "                    'Authorization': TOKEN\n" +
    "                },\n" +
    "                method='GET'\n" +
    "            ),\n" +
    "            timeout=5\n" +
    "        )\n" +
    "\n" +
    "    return json.loads(response.read())";

export const gitRestApiDescription = "A Rest API built to display all my projects from GitHub on my portfolio website";
export const gitRestApiTechnologies = "Python, Terraform and API Gateway";
export const gitRestApiLink = "https://github.com/JacobTLeBlanc/GitRestApi";

/**
 * Email Microservice
 */

export const emailServiceCodeString = "@RestController\n" +
    "@RequestMapping(\"/\")\n" +
    "public class EmailController {\n" +
    "\t\n" +
    "\t/**\n" +
    "\t * Sends an Email\n" +
    "\t * \n" +
    "\t * @param sendTo   Email address of receiver (Must be valid)\n" +
    "\t * @param subject  Subject of email\n" +
    "\t * @param body     Body/text of email\n" +
    "\t * @throws RuntimeException when email is invalid\n" +
    "\t */\n" +
    "\t@PostMapping(\"/send\")\n" +
    "\tprivate void sendEmail (\n" +
    "\t\t\t@RequestParam final String sendTo,\n" +
    "\t\t\t@RequestParam final String subject,\n" +
    "\t\t\t@RequestParam final String body\n" +
    "\t\t\t) throws RuntimeException {\n" +
    "\t\t\n" +
    "\t\temailService.sendEmail(sendTo, subject, body);\n" +
    "\t\t\n" +
    "\t}\n" +
    "\t\n" +
    "\t@Autowired\n" +
    "\tprivate EmailService emailService;\n" +
    "}"

export const emailServiceDescription = "Microservice to send emails"
export const emailServiceTechnologies = "Java, SpringBoot and Swagger"
export const emailServiceLink = "https://github.com/JacobTLeBlanc/email-service";