import ObjectTracking from '../public/images/Activities/Activities/ObjTrk.jpg'
import TrafficAnalysis from '../public/images/Activities/Activities/TrafficAnalysis.jpg'
import Accent from '../public/images/Correction Images/Correction Images/Accent Recognition.jpg'
import Detection from '../public/images/Correction Images/Correction Images/Detection.jpeg'
import Autonomous from '../public/images/Activities/Activities/AutoVec2.jpg'
import AutonomousRobot from '../public/images/Correction Images/Correction Images/autoRobot.webp'
import DigitalTwin from '../public/images/Activities/Activities/DigitalTwin2.jpg'
import VoiceAI from '../public/images/Activities/Activities/VoiceAI.jpg'
import PredictiveAnalysis from '../public/images/Activities/Activities/PredictiveAnalysis.jpg'
import imageClassification from '../public/images/Activities/Activities/imageClassification.jpg'
import segmentation from '../public/images/homePageImages/segmentation.png'
import poseEstimation from '../public/images/homePageImages/poseEstimation.jpg'
import handGesture from '../public/images/Activities/Activities/handGesture.jpg'
import speechEmotionRecognition from '../public/images/Activities/Activities/speechEmotionRecognition.jpg'
import wareHouse from '../public/images/Activities/Activities/wareHouse.jpg'
import agriRobots from '../public/images/Activities/Activities/agri.jpg'

export const ActivityData = [
    {
        heading: 'Classification',
        content : 'Classification is a machine learning task for determining which objects are in an image or video. It refers to training machine learning models with the intent of finding out which classes (objects) are present. Classification is useful at the yes-no level of deciding whether an image contains an object/anomaly or not. A separate task from classification is localization, or determining the position of the classified objects in the image or video.',
        background : 'rgba(0,204,205,0.7)',
        align : 'left',
        image : imageClassification
    },
    {
        heading: 'Segmentation',
        content : 'Segmentation is one which segments the target from the background and show to the users. Any image consists of both useful and useless information, depending on the user’s interest. Image segmentation separates an image into regions, each with its particular shape and border, delineating potentially meaningful areas for further processing, like classification and object detection. The regions may not take up the entire image, but the goal of image segmentation is to highlight foreground elements and make it easier to evaluate them. Image segmentation provides pixel-by-pixel details of an object. segmentation thus finds its way in prominent fields like Robotics, Medical Imaging, Autonomous Vehicles, and Intelligent Video Analytics.',
        background : 'rgba(95,95,215,0.7)',
        align : 'right',
        image : segmentation
    },
    {
        heading: 'Pose Estimation',
        content : 'Matrix Pose Estimation system is a highly specialized model for estimating the Human body Gesture. We provide a premium quality pose estimation system with highest possible accuracy as it is optimized for best performance.',
        background : 'rgba(255,255,0,0.7)',
        align : 'left',
        image :poseEstimation
    },
    {
        heading: 'Hand Gesture Recognitions',
        content : 'Hand gesture recognition system is a premium AI system that can recognize the hand gestures of humans and interpret what they are trying to communicate. We provide a top notch hand gesture recognition system to control and regulate the commodities.',
        background : 'rgba(204,0,102,0.7)',
        align : 'right',
        image : handGesture
    },
    {
        heading: 'Matrix Voice AI',
        content : 'Natural language processing (NLP) is a branch of artificial intelligence within computer science that focuses on helping computers to understand the way that humans write and speak. This is a difficult task because it involves a lot of unstructured data. The style in which people talk and write (sometimes referred to as ‘tone of voice’) is unique to individuals, and constantly evolving to reflect popular usage.',
        background : 'rgba(255,128,0,0.7)',
        align : 'left',
        image : VoiceAI
    },{
        heading: 'Environmental Noise Detection',
        content : 'Environmental Noise Detection system is an NLP based system which detects the noise in the environment. It is designed more precisely using Matrix Voice AI architecture with various environmental sounds to have a great performance.',
        background : 'rgba(195,195,195,0.7)',
        align : 'right',
        image : TrafficAnalysis
    },
    {
        heading: 'Accent Recognition',
        content : 'This is an intelligent system which recognises the accent of the person. This employs Deep Neural Networks based on convolutional function to give best performance.',
        background : 'rgba(0,153,0,0.7)',
        align : 'left',
        image : Accent
    },{
        heading: 'Speech Emotion Recognition',
        content : 'An NLP based intelligent system is one which processes the speech of the person to recognise the emotions of the person. This employs a multi model classification methodology which also takes Accent characteristics into an account and processes the voice signals to give a finest experience.',
        background : 'rgba(90,120,195,0.9)',
        align : 'right',
        image : speechEmotionRecognition
    },
    {
        heading: 'Animal Sound Classification',
        content : 'The voice processing system which employs Matrix voice AI algorithms to classify the animals according to the sound they make.',
        background : 'rgba(255,105,105,0.7)',
        align : 'left',
        image : ObjectTracking
    },{
        heading: 'Autonomous Navigating Robots',
        content : 'Navigating through unstructured environments is a basic capability of intelligent creatures, and thus is of fundamental interest in this research.  Edge Matrix presents a new era of Autonomous Navigating Robots.',
        background : 'rgba(255,255,105,0.7)',
        align : 'right',
        image : AutonomousRobot
    },
    {
        heading: 'Automated Guided Vehicle',
        content : 'Automated guided vehicle (AGV) systems are used in many industrial applications characterized by physical path guidance in the form of embedded magnets or wires, painted lines or magnetic tape, or other electrical or mechanical path-defining means.',
        background : 'rgba(255,178,102,0.7)',
        align : 'left',
        image : Autonomous
    },{
        heading: 'Warehouse Robots',
        content : 'These are new generation of multi-sensing autonomous vehicles from Edge Matrix Corporation, used for indoor intralogistics tasks. It can autonomously transport items and navigate freely in its environment. As a mobile robot, it makes the labor of the workers easier and improves business efficiency.',
        background : 'rgba(255,0,127,0.7)',
        align : 'right',
        image : wareHouse
    },
    {
        heading: 'Agri Bots',
        content : 'Innovation in terms of robotics applications in agriculture has advanced considerably in the last 5 years. The objective of agricultural robotics is to help the sector in its efficiency and in the profitability of the processes.',
        background : 'rgba(9,190,5,0.7)',
        align : 'left',
        image : agriRobots
    },{
        heading: 'Digital Twin',
        content : 'Digital twin technology, with engineering data at its core, is helping engineers gain control over their assets. By connecting the right people to the right data and the right processes, engineers gain greater end-to-end insights. They can quickly identify the actions and strategies needed to deliver sustainable performance improvements.',
        background : 'rgba(0,205,205,0.7)',
        align : 'right',
        image : DigitalTwin
    },
    {
        heading: 'Predictive Analysis',
        content : 'Predictive Analytics is a form of advanced analytics that uses current data and historical data to forecast different activities, customer behaviors, and future trends. It uses many techniques data mining, statistics, data modeling, machine learning, and artificial intelligence.',
        background : 'rgba(107,125,192,0.9)',
        align : 'left',
        image : PredictiveAnalysis
    },
    {
        heading: 'Detection',
        content : 'Custom Detection system is a customizable vision AI system for Detections. We provide a global standard custom object detection service with our Matrix Vision AI system. Detection combines classification and localization to determine what objects are in the image or video and specify where they are in the image. Use cases for object detection include facial detection with any post-detection analysis; for example, expression detection, age estimation or drowsiness detection. Many real-time object detection applications exist for traffic management, such as vehicle detection systems based on traffic scenes. As described above, the most popular approaches to computer vision are classification and object detection to identify objects present in an image and specify their position.',
        background : 'rgba(255,255,153,0.7)',
        align : 'right',
        image : Detection
    },
];