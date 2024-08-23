const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin nisi eget libero rhoncus, sit amet feugiat nisl volutpat. Etiam molestie efficitur ex nec pellentesque. Nullam at mauris tincidunt, porttitor urna eget, ultricies purus. Phasellus vel quam quis erat volutpat vehicula vitae ac felis. Suspendisse quis pellentesque felis, et sodales orci. Cras molestie dolor dolor, sed fringilla neque ultrices sed. Aliquam erat volutpat. Praesent eleifend elementum auctor. Mauris posuere aliquet maximus. Praesent purus nunc, sodales lobortis ipsum et, elementum sollicitudin enim. Sed libero nunc, fringilla eu ante egestas, luctus tincidunt nulla. Donec vulputate laoreet condimentum. Etiam et magna vitae eros sagittis suscipit. Integer ex turpis, pellentesque eu orci sed, malesuada porttitor neque. Aenean elementum mauris sit amet lorem lacinia commodo.",

    "Nunc eget ligula a massa lacinia viverra. Ut eu consectetur urna. Ut non vulputate risus. Nam erat ante, sollicitudin hendrerit neque non, tincidunt suscipit elit. Suspendisse in posuere purus, id consequat magna. Praesent eget augue pulvinar diam pharetra vehicula. Donec semper suscipit velit, eleifend posuere neque suscipit vitae. In non leo et purus congue tempus. Maecenas eget blandit orci. Vivamus at velit sollicitudin, egestas ipsum vel, consectetur augue. In lobortis sed dolor at bibendum. Phasellus mauris massa, laoreet non ullamcorper suscipit, aliquet a turpis. Suspendisse eu auctor tortor. Etiam turpis mi, efficitur at viverra sit amet, sollicitudin vitae orci. Morbi nec dapibus velit.",

    "Proin faucibus urna vitae orci iaculis eleifend. Vivamus non viverra urna, ut congue felis. Aliquam ligula elit, eleifend eu urna non, lacinia ultrices turpis. Donec quis faucibus dui. In malesuada ipsum vitae nisl aliquet gravida. Morbi non euismod sapien. Curabitur diam risus, volutpat vel lorem sed, mattis gravida urna. Sed ac mollis sapien, quis finibus massa. Duis consectetur maximus enim id gravida. Morbi ac ipsum dignissim, posuere mauris quis, tempor odio. Aliquam turpis risus, ornare at commodo sed, pulvinar at magna. Vivamus fringilla dictum metus finibus mollis. Phasellus mollis efficitur mauris, et ultrices odio gravida id. Proin ac egestas nisl. Cras semper porttitor eros, ac feugiat nibh feugiat scelerisque. Praesent aliquet orci at eros condimentum luctus.",

    "Phasellus venenatis, lorem ac venenatis rutrum, augue justo sollicitudin ante, sit amet rhoncus odio velit et libero. Nulla facilisi. Ut euismod egestas dolor, at tristique massa ullamcorper sit amet. Vivamus ultricies lorem vitae ex imperdiet, ac lacinia magna rutrum. Maecenas sit amet porttitor metus, eget volutpat nisi. Praesent ex urna, facilisis ac tortor sed, hendrerit efficitur odio. Nulla lacus sapien, eleifend eu augue eu, ultrices venenatis lacus. Praesent mattis, purus eget lobortis fringilla, tortor urna cursus tellus, et cursus turpis risus vitae nunc. Phasellus nibh tellus, volutpat nec risus ut, condimentum porta est. Nulla consectetur ornare neque, at auctor libero feugiat vel. Nullam ullamcorper mi vel enim consectetur tincidunt. Cras vel commodo ligula.",

    "Quisque blandit tellus vitae odio porttitor, a rhoncus lacus blandit. Suspendisse quis cursus eros, nec imperdiet arcu. Integer non nisl vel diam feugiat lobortis. Duis volutpat nec massa nec pulvinar. Pellentesque vel eros tincidunt, posuere nulla vel, vehicula turpis. Ut sodales odio ut nisi semper, vitae feugiat ipsum rhoncus. Suspendisse bibendum nisi aliquam massa maximus, interdum eleifend sem porta. Integer malesuada pulvinar ultricies. In eleifend felis nec enim ultricies tempor. Pellentesque finibus varius congue. Fusce at nunc nibh. Ut ut ex vitae eros lobortis auctor eget ac metus.",

    "Nunc quis tempus lectus. Sed venenatis dolor sed nisl facilisis aliquet. Nulla facilisi. In erat justo, vulputate eu fermentum a, tempor in quam. Nulla ut bibendum lectus. Vivamus vehicula maximus sapien, sed malesuada nibh bibendum at. Etiam neque est, scelerisque gravida risus nec, scelerisque sagittis quam. Nunc sodales efficitur diam. Donec consequat vitae nibh ut mollis. Donec accumsan ante et blandit ornare. Quisque tincidunt scelerisque luctus. Maecenas dignissim fringilla iaculis. Curabitur egestas tempor lorem et semper. Curabitur accumsan lacus nec sapien finibus mollis.",

    "Sed in mattis neque, sit amet porta libero. Quisque eget consectetur quam. Praesent et ipsum non odio porta pharetra. Mauris eu mattis elit. Aliquam aliquet accumsan pellentesque. Proin lobortis sem id felis fermentum, sit amet semper nisi pretium. Nullam vel magna eu sapien faucibus vestibulum in id elit. Praesent feugiat elementum placerat.",

    "Morbi nec mollis tellus, mattis semper metus. In varius justo ac eros suscipit, eu auctor dolor vehicula. Nulla et rutrum ex. Aenean id lorem tristique, euismod leo nec, aliquet sapien. Ut dignissim nibh elit, tincidunt mollis metus cursus id. Vestibulum aliquet facilisis lectus, ac imperdiet orci tincidunt in. Etiam luctus massa quis fermentum rhoncus. Duis nec risus id orci pretium condimentum. Phasellus malesuada leo eu elit eleifend faucibus nec ut ligula. Praesent nec neque turpis. Vestibulum eu ante risus. Suspendisse ultricies turpis non diam iaculis, vitae tempor nibh tempor. Vestibulum pharetra ligula sit amet lorem vestibulum, sed suscipit diam viverra. Aliquam vitae sapien a nunc gravida mattis eget sed ante. Nulla a lectus ac libero euismod aliquet.",

    "am aliquam lacinia neque id posuere. Cras pretium viverra erat at vehicula. In ac neque ligula. Vivamus nec nulla placerat, semper sapien eu, condimentum dui. Aliquam vitae tempus nisl. Phasellus egestas lobortis sapien ultricies sagittis. Pellentesque vestibulum eros et ex tincidunt, ut mattis augue aliquam. Quisque a ex vel purus suscipit venenatis. Praesent aliquam viverra laoreet.",

    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pharetra lobortis ligula in eleifend. Curabitur a mollis nibh, quis dictum massa. Curabitur iaculis non arcu in facilisis. Donec dictum est id massa tincidunt, vitae efficitur turpis placerat. Vivamus tempor dignissim neque eu sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean scelerisque lorem eu urna vestibulum molestie.",

    "Vivamus eget tincidunt augue. Mauris lacinia dolor et dolor iaculis blandit. Etiam ut lacinia ipsum, eu fermentum odio. Integer sit amet imperdiet tellus, semper volutpat nisl. Vestibulum luctus erat pretium dolor tempor tempor. Phasellus vel felis ut quam fermentum dapibus quis eget odio. Quisque a rutrum felis. Donec placerat viverra aliquet. Fusce id elementum diam.",
];

const form = document.querySelector(".form");
const textsContainer = document.querySelector(".texts-container");

function addParagraph() {
    const paragraphText = paragraphs[Math.floor(Math.random() * paragraphs.length)];

    // estructura del parrafo
    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "paragraph");

    paragraph.innerText = paragraphText;
    textsContainer.appendChild(paragraph);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // remover los elementos del padre
    textsContainer.innerHTML = "";

    const paragraphNumber = parseInt(
        document.getElementById("paragraph-number").value
    );

    if(paragraphNumber > 0){
        console.log('legal');

        // forma fácil
        for(let i = 0; i < paragraphNumber; i++){
            addParagraph();
        }
        
        // compleja, aplicar SOLO si el numero no supera la longitud del arreglo, se agregó acá para tener ejemplo
        // let tempText = paragraphs.slice(0, paragraphNumber);

        // tempText = tempText.map((parrafo) => {
        //     return `<p class="paragraph">${parrafo}</p>`;
        // }).join("");

        // textsContainer.innerHTML = tempText;
    }
});
