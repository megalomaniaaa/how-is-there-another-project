function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xUFen8LTY/model.json',modelReady)
}
function modelReady()
{
    classifier.classify(gotResult)
}