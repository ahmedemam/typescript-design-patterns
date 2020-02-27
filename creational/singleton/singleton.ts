// simple singleton pattern

export namespace SingletonPattern {
	class Singleton {
		private static singletonInstance: Singleton;

		private constructor() { }

		public static getInstance() {
			this.singletonInstance = new Singleton();
			return this.singletonInstance;
		}
	}
}