import SocialIcons from './SocialIcons'

export default function OffCanvasMenu() {
    return (
        <div id="offCanvas" className="fixed top-0 right-0 bg-white shadow-lg p-6 w-96 z-50 hidden">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-semibold">Get in touch</h3>
                <button><i className="ri-close-line text-2xl"></i></button>
            </div>
            <p className="text-gray-600 mb-5">
                I'm always excited to take on new projects and collaborate with innovative minds.
            </p>
            <div className="space-y-4">
                <div>
                    <span className="text-sm font-medium">Phone Number</span>
                    <p>+1-234-567-8901</p>
                </div>
                <div>
                    <span className="text-sm font-medium">Email</span>
                    <p>contact@james.dev</p>
                </div>
                <div>
                    <span className="text-sm font-medium">Skype</span>
                    <p>JamesDeveloper</p>
                </div>
                <div>
                    <span className="text-sm font-medium">Address</span>
                    <p>0811 Erdman Prairie Road, Joaville, California 90210</p>
                </div>
            </div>
            <div className="mt-6">
                <p className="text-sm mb-2">Social</p>
                <SocialIcons className="flex gap-3" />
            </div>
        </div>
    )
}
